import Link from "next/link";

export default async function Details() {


  const { users } = await fetch(" https://dummyjson.com/users").then(res => res.json());
  console.log(users)

  return (
   <div className="container">
      {users.map(x => 
      <div className="user-item">
         <img src={x.image}/>
         <span>İsim: {x.firstName} </span> 
         <span>Soyisim: {x.lastName}</span>
         <h3>Yaş: {x.age}</h3>
         <Link href={"/details/" + x.id}>Detay Göster</Link>
      </div> 
      )}
    
   </div>
    
  )
}