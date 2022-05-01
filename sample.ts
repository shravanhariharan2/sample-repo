interface User {
  id: string;
  email: string;
  balance: number;
}

interface MerchItem {
  id: string;
  name: string;
  stock: number;
  price: number;
}

interface MerchOrder {
  id: string;
  itemId: string;
  quantity: number; 
}

class MerchStoreDatabase {
  async insertOrder(order: MerchOrder): Promise<void> {
    // add the order to the database
  }
}

class EmailService {
  async sendOrderConfirmation(user: User, order: MerchOrder): Promise<void> {
    // send an email as confirmation
  }
}

/**
 * TODO: Implement placing a merch order.
 * 
 * A merch order can be placed if the following conditions are met:
 * - there are enough items in stock
 * - the user has enough balance to afford the items
 * 
 * If the conditions are satisfied, then the user's balance and the item's stock should
 * be deducted accordingly.
 * 
 * The order should then be updated in the database, and an email confirmation should
 * be sent to the user.
 * 
 * @param user user object
 * @param item item object
 * @param quantity quantity of item requested
 */
async function placeMerchOrder(user: User, item: MerchItem, quantity: number): Promise<void> {
  // TODO: implement
}
