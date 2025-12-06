import { useMutation } from "@tanstack/react-query";
import { ContactUseCase } from "../../Domain/usecases/Contact.usecase";
import { ContactRepositoryImpl } from "../../Data/repositories/ContactRepositoryImpl";
import type { Contact } from "../../Domain/entities/Contact";

export default function Contact() {
  const mutation = useMutation({
    mutationKey: ["contact-request"],
    mutationFn: async (formData: FormData) => {
      const payload: Contact = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string
      };

      return new ContactUseCase(new ContactRepositoryImpl())
        .contactRequest(payload);
    }
  });
  return (
     <div className="contact">
      <h2>Contact</h2>

      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>) =>{
            e.preventDefault();
            mutation.mutate(new FormData(e.currentTarget))
        }}>
          <input name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}
