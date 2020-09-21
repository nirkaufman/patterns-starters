enum Status {Received, Pending, InProcess, Sent, Delivered }
enum Priority { Low, Medium, High, Urgent }

interface Order {
  id: number;
  itemCount: number;
  ordered: string;
  expectedDelivery: string;
  status: Status,
  priority: Priority;
}

const orders: Order[] = [
  {
    id: 1,
    itemCount: 3,
    ordered: '08/12/2020',
    expectedDelivery: '9/15/2020',
    status: Status.Pending,
    priority: Priority.Low
  },
  {
    id: 2,
    itemCount: 15,
    ordered: '06/10/2020',
    expectedDelivery: '8/15/2020',
    status: Status.Pending,
    priority: Priority.High
  },
  {
    id: 3,
    itemCount: 1,
    ordered: '08/12/2020',
    expectedDelivery: '9/15/2020',
    status: Status.Sent,
    priority: Priority.Low
  },
]

class OrderManager {
  private readonly orders: Order[];

  constructor(orders:Order[]) {
    this.orders = orders;
  }

  process() {
    for(const order of this.orders) {
      console.log(order);
    }
  }
}

/**
 *  todo: each order need be process in the following order:
 *   - validate: if the order id is valid. if not, no need to check status
 *   - check status: if received, move to done - no need to check priority
 *   - check priority: if urgent, send to a urgent queue and return
 */
const orderManager = new OrderManager(orders);
orderManager.process();
