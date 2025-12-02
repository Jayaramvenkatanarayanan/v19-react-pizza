export class Helper {
  static CleanImageUrl(imageUrl: string) {
    return imageUrl.replace("/public/", "");
  }
  static intl() {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });
  }
  static fetchPostMethod<T extends object>(payload: T) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
  }
}
