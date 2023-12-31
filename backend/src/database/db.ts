import { open } from "sqlite";
import { Database } from "sqlite3";

class SQL_DB {

  private db: any

  constructor() {
    this.db = {}
  }

  async connect() {
    this.db = await open({ filename: ":memory:", driver: Database });;
  }

  async sql(query: string, variables?: (string | number | undefined)[]) {
    return this.db.all(query, variables)
  }

  async seed() {
    // Users
    await this.sql(`
    CREATE TABLE users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255),
      email VARCHAR(255)
    );
  `);
    await this.sql(`
    INSERT INTO users (id, name, email)
    VALUES
      (1, 'Alien Morty', 'alien@mortys.com'),
      (2, 'Banana Morty', 'slippery@mortys.com'),
      (3, 'Cat Morty', 'meow@mortys.com'),
      (4, 'Dog Morty', 'dawg@mortys.com'),
      (5, 'Evil Morty', '666@mortys.com'),
      (6, 'Frozen Morty', 'letitgo@mortys.com'),
      (7, 'Genius Morty', 'rick@mortys.com'),
      (8, 'Hammerhead Morty', 'hammertime@mortys.com'),
      (9, 'Pickle Morty', 'letsmarinate@mortys.com');
  `);

    // Work Orders
    await this.sql(`
    CREATE TABLE work_orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name VARCHAR(255),
      status VARCHAR(255) CHECK( status IN ('OPEN', 'CLOSED') ) NOT NULL DEFAULT 'OPEN'
    );
  `);
    await this.sql(`
    INSERT INTO work_orders (id, name, status)
    VALUES
      (1, 'Unfreeze Frozen Morty', 'OPEN'),
      (2, 'Clean Cat Morty''s litterbox', 'OPEN'),
      (3, 'Walk Dog Morty around the block', 'OPEN'),
      (4, 'Hammer nails', 'OPEN'),
      (5, 'Land on Earth', 'CLOSED'),
      (6, 'Freeze Morty', 'CLOSED'),
      (7, 'Don''t assign and close', 'CLOSED');
  `);

    // Work Order Assignees
    await this.sql(`
    CREATE TABLE work_order_assignees (
      work_order_id INT NOT NULL,
      user_id INT NOT NULL,
      PRIMARY KEY(work_order_id, user_id),
      FOREIGN KEY(work_order_id) REFERENCES work_orders(id),
      FOREIGN KEY(user_id) REFERENCES users(id)
    );
  `);
    await this.sql(`
    INSERT INTO work_order_assignees (work_order_id, user_id)
    VALUES
      (3, 1),
      (5, 1),
      (2, 3),
      (3, 4),
      (6, 5),
      (4, 8);
  `);
  }

}

export default new SQL_DB();
