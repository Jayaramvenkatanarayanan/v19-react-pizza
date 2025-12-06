import { Helper } from "../../Core/utils/helper";
import type { Contact, ContactResponse } from "../../Domain/entities/Contact";

export class ContactAPIDataSource {
  static async requestContact(contact: Contact): Promise<ContactResponse> {
    const response= await fetch(
      "/api/contact",
      Helper.fetchPostMethod(contact)
    );
    console.log("🚀 ~ ContactAPIDataSource ~ requestContact ~ response:", response)
    if (!response.ok) {
      throw new Error("Failed to place order");
    }
    const data: ContactResponse= await response.json();
    return data;
  }
}
