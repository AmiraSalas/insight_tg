import { type Opportunity, type InsertOpportunity } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllOpportunities(): Promise<Opportunity[]>;
  getOpportunityById(id: string): Promise<Opportunity | undefined>;
  createOpportunity(opportunity: InsertOpportunity): Promise<Opportunity>;
  updateOpportunity(id: string, opportunity: Partial<InsertOpportunity>): Promise<Opportunity | undefined>;
  deleteOpportunity(id: string): Promise<boolean>;
  getVisitorCount(): Promise<number>;
  incrementVisitorCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private opportunities: Map<string, Opportunity>;
  private visitorCount: number;

  constructor() {
    this.opportunities = new Map();
    this.visitorCount = 0;
  }

  async getAllOpportunities(): Promise<Opportunity[]> {
    return Array.from(this.opportunities.values());
  }

  async getOpportunityById(id: string): Promise<Opportunity | undefined> {
    return this.opportunities.get(id);
  }

  async createOpportunity(insertOpportunity: InsertOpportunity): Promise<Opportunity> {
    const id = randomUUID();
    const opportunity: Opportunity = { 
      ...insertOpportunity, 
      id,
      reopenDate: insertOpportunity.reopenDate ?? null
    };
    this.opportunities.set(id, opportunity);
    return opportunity;
  }

  async updateOpportunity(id: string, updates: Partial<InsertOpportunity>): Promise<Opportunity | undefined> {
    const existing = this.opportunities.get(id);
    if (!existing) return undefined;
    
    const updated: Opportunity = { ...existing, ...updates };
    this.opportunities.set(id, updated);
    return updated;
  }

  async deleteOpportunity(id: string): Promise<boolean> {
    return this.opportunities.delete(id);
  }

  async getVisitorCount(): Promise<number> {
    return this.visitorCount;
  }

  async incrementVisitorCount(): Promise<number> {
    this.visitorCount++;
    return this.visitorCount;
  }
}

export const storage = new MemStorage();
