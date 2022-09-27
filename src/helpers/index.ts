export const getCurrentDate = () => {
   const today = new Date();

   return today.toLocaleDateString("en-US", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
   });
};

export const createSnippet = (str: string) => {
    const snippetSize = 9;
   const strArr = str.split(" ");
   if (strArr.length <= snippetSize) return str;
   else return strArr.slice(0, snippetSize).join(" ").concat("...");
};
