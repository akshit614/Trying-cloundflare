import { pgTable, text, serial, doublePrecision } from "drizzle-orm/pg-core";

export const products = pgTable('products', {
    id : serial('id').primaryKey(),
    name : text('name'),
    description : text('description'),
    price : doublePrecision('price'),
})