import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const opportunities = pgTable("opportunities", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  organization: text("organization").notNull(),
  description: text("description").notNull(),
  location: text("location").notNull(),
  country: text("country").notNull(),
  deadline: text("deadline").notNull(),
  reopenDate: text("reopen_date"),
  deadlineStatus: text("deadline_status").notNull(),
  competitiveness: text("competitiveness").notNull(),
  funding: text("funding").notNull(),
  language: text("language").array().notNull(),
  duration: text("duration").notNull(),
  ageRange: text("age_range").notNull(),
  careerArea: text("career_area").array().notNull(),
  url: text("url").notNull(),
});

export const insertOpportunitySchema = createInsertSchema(opportunities).omit({
  id: true,
});

export type InsertOpportunity = z.infer<typeof insertOpportunitySchema>;
export type Opportunity = typeof opportunities.$inferSelect;
