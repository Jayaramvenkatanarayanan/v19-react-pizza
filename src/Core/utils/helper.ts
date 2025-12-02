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
}
