 const BaseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function regester({firstName ,lastName ,phone,email,password,businessName,businessType}:{firstName:string ,lastName:string ,phone:string,email:string,password:string,businessName:string,businessType:string}) {
  const res = await fetch(`${BaseUrl}/register`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
    firstName,
    lastName,
    phone,
    email,
    password,
    businessName,
    businessType
  })
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    console.error("Error response:", errorData);
    throw new Error(`Failed to add to cart: ${res.statusText}`);
  }

  const product = await res.json();
  return product;
}