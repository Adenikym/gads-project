// realtime listener

db.collection("results").onSnapshot(
    (snapshot) => {
//console.log(snapshot.docChanges())
snapshot.docChanges().forEach((change) => {
   // console.log(change, change.doc.data());
   if(change.type==="added"){
       //add document data to the webpage
       renderResult(change.doc.data, change.doc.id)
   }

   if(change.type === "removed"){
       // remove document data from the webpage
   }
})
    }
)