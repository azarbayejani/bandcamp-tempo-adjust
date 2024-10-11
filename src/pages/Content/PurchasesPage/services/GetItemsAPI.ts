import PQueue from 'p-queue/dist';
import { formatDate } from './formatDate';

interface ApiPurchase {
  artist_name: string;
  auth_type: string;
  band_url: string;
  bandcamp_id: number;
  currency: string;
  download_url: string;
  item_id: number;
  item_title: string;
  item_title2?: null;
  item_title_sym_id: number;
  item_url: string;
  // killed: null
  // live_event_description: null
  // live_event_end_date: null
  // live_event_id: null
  // live_event_scheduled_end_date: null
  // live_event_scheduled_start_date: null
  // live_event_timezone_sym_id: null
  // live_event_title: null
  // long_payer_email: false
  // marked_shipped_date: null
  // merch_album_killed: null
  // merch_digital_title: null
  // merch_download_killed: null
  // merch_id: null
  // merch_image_ids: null
  // merch_release_date: null
  // merch_snapshot_id: null
  // mobile_app_open_link: null
  // modified_after_sale: null
  // option_sym_id: null
  // option_title: null
  // option_txt: null
  payer_email: string;
  payer_firstname: string;
  payer_firstname_sym_id: number;
  payer_lastname: string;
  payer_lastname_sym_id: number;
  payment_date: string; // "19 Mar 2023 18:47:21 GMT"
  formattedPaymentDate: Date;
  paypal_id: string;
  paypal_payment_date: string; // "19 Mar 2023 18:47:43 GMT"
  preorder: boolean;
  // private: null
  quantity: number;
  // refund_amount: null
  // refund_currency: null
  // refund_currency_rate: null
  // refund_date: null
  // refund_pending: null
  // sale_item_id: 236979109
  // sale_item_type: "a"
  // seller_country_code: null
  seller_name: string;
  // ship_note: null
  // ship_note_id: null
  // shipment: null
  // shipment_id: null
  // shippable: null
  shipping: number;
  // shipping_country: null
  // shipping_country_code: null
  // show_live_stream_link: null
  // sig: "j4sO2+bXE28OuOPR1q+AmM9H2o4="
  // slug_text: "speed-oddity-vol-ii"
  // sold_date: "19 Mar 2023 18:47:45 GMT"
  // state: "s"
  // subdomain: "tomakami"
  // subscription_image_id: null
  // subscription_period: null
  // subscription_title: null
  // subscription_url: null
  tax: number;
  // tax_system: 7
  // tax_type: "v"
  // token: "1679251641:236979109"
  // tralbum_release_date: "17 Feb 2023 00:00:00 GMT"
  // type_id: null
  unit_price: number;
  // xlong_payer_email: false
}

export interface Purchase {
  paymentDate: string;
  currency: string;
  unitPrice: number;
  quantity: number;
  shipping: number;
  totalPrice: number;
  tax: number;
}

interface GetItemsAPIInvalidCrumbsErrorResponse {
  crumb: string;
  error: string;
}

interface GetItemsAPISuccessfulResponse {
  items: ApiPurchase[];
  last_token: string;

  // this is jank, oh well
  error: undefined;
}

const withFormattedPaymentDate: (purchase: ApiPurchase) => Purchase = (
  purchase
) => {
  return {
    paymentDate: formatDate(purchase.payment_date),
    itemTitle: purchase.item_title,
    currency: purchase.currency,
    unitPrice: purchase.unit_price,
    quantity: purchase.quantity,
    shipping: purchase.shipping,
    totalPrice:
      purchase.unit_price * purchase.quantity +
      purchase.shipping +
      purchase.tax,
    tax: purchase.tax,
  };
};

export class PurchasesAPI {
  crumb?: string;
  username: string;

  constructor({ crumb, username }: { crumb?: string; username: string }) {
    this.crumb = crumb;
    this.username = username;
  }

  async getAllItems() {
    let lastToken: string | undefined = undefined;
    const purchases: Purchase[] = [];
    const queue = new PQueue({
      concurrency: 1,
      interval: 1000,
      intervalCap: 1,
    });
    let crumbErrorCount = 0;
    while (true) {
      try {
        let currLastToken = lastToken;
        const response = await queue.add(() =>
          this.getItems({ lastToken: currLastToken })
        );

        if (!response || !response.purchases || !response.purchases.length) {
          break;
        }
        lastToken = response.lastToken;
        purchases.push(...response.purchases);
      } catch (e) {
        if (e instanceof InvalidCrumbError) {
          if (crumbErrorCount > 5) {
            console.error('Too many crumb errors. Assuming you got banned.');
            throw e;
          }

          this.crumb = e.crumb;
          crumbErrorCount++;
        } else {
          throw e;
        }
      }
    }

    return purchases;
  }

  async getItems({ lastToken }: { lastToken?: string }) {
    const response = await PurchasesAPI.getItems({
      username: this.username,
      lastToken,
      crumb: this.crumb,
    });

    return {
      lastToken: response.last_token,
      purchases: response.items.map(withFormattedPaymentDate),
    };
  }

  private static async getItems({
    username,
    lastToken,
    crumb,
  }: {
    username: string;
    lastToken?: string | null;
    crumb?: string;
  }) {
    const response = await fetch(
      'https://bandcamp.com/api/orderhistory/1/get_items',
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          last_token: lastToken,
          platform: 'Mac',
          crumb: crumb,
        }),
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
      }
    );

    const responseJSON = await response.json();

    if (responseJSON.error === 'invalid_crumb') {
      if (!responseJSON.crumb) {
        throw new Error(
          "Didn't get a crumb back from failed getItems API call"
        );
      }

      throw new InvalidCrumbError('Invalid crumb', responseJSON.crumb);
    }

    return responseJSON;
  }
}

class InvalidCrumbError extends Error {
  crumb: string;

  constructor(message: string, crumb: string) {
    super(message);
    this.crumb = crumb;

    Object.setPrototypeOf(this, InvalidCrumbError.prototype);
  }
}
