export class Helper {
    static CleanImageUrl (imageUrl:string){
      return imageUrl.replace("/public/","")
    }
}