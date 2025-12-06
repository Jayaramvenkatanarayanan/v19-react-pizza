import type { Contact, ContactResponse } from "../../Domain/entities/Contact";
import type { ContactRepository } from "../../Domain/repositories/ContactRepository";
import { ContactAPIDataSource } from "../datasources/ContactAPIDataSource";

export class ContactRepositoryImpl implements ContactRepository {
  async requestContact(Contact: Contact): Promise<ContactResponse> {
    return await ContactAPIDataSource.requestContact(Contact);
  }
}
