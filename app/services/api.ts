 const BaseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function regester({firstName ,lastName ,phone,email,password,businessName,businessType}:{firstName:string ,lastName:string ,phone:string,email:string,password:string,businessName:string,businessType:string}) {
  const res = await fetch(`${BaseUrl}/api/register`, {
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
    throw new Error(`Failed to Resgester: ${res.statusText}`);
  }


  const product = await res.json();
  return product;
}
export async function resendOtp({phone}:{phone:string}) {
  const res = await fetch(`${BaseUrl}/api/resend-otp`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({phone })
  });

  if (!res.ok) {
    throw new Error(`Failed to ResendOtp: ${res.statusText}`);
  }

  const product = await res.json();
  return product;
}
export async function otpcodereq({phone ,CodeOtp}:{phone:string,CodeOtp:string}) {
  const res = await fetch(`${BaseUrl}/api/otp`, {
    method: "POST",
    cache: "no-store",
    credentials:"include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({phone , CodeOtp})
  });

  if (!res.ok) {
    
    throw new Error(`Failed to Validate Otp: ${res.statusText}`);
  }

  const product = await res.json();
  return product;
}
export async function updateUser({userId ,field ,value}:{userId:string,field:string,value:string}) {
  const res = await fetch(`${BaseUrl}/api/update`, {
    method: "PATCH",
    cache: "no-store",
    credentials:"include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({userId , field ,value})
  });

   if (!res.ok) {
    throw new Error(`Failed to Update user: ${res.statusText}`);
  }


  const product = await res.json();
  return product;
}
export async function getUser() {
  const res = await fetch(`${BaseUrl}/api/me`, {
    method: "GET",
    cache: "no-store",  
    credentials: "include", 
  });

  if (!res.ok) {
    throw new Error(`Failed to Get UserData: ${res.statusText}`);
  }

  const user = await res.json();
  return user;
}
export async function login({email,password}:{email:string ,password:string}) {
  const res = await fetch(`${BaseUrl}/api/login`, {
    method: "POST",
    cache: "no-store",  
     headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email ,password }),
    credentials: "include"
  });

  if (!res.ok) {
    throw new Error(`Failed Login Admin: ${res.statusText}`);
  }

  const user = await res.json();
  return user;
}
export async function logoutAdmin() {
  const res = await fetch(`${BaseUrl}/api/logout-admin`, {
    method: "POST",
    cache: "no-store",  
     headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });

  if (!res.ok) {
    throw new Error(`Failed Logout: ${res.statusText}`);
  }

  const user = await res.json();
  return user;
}
export async function logoutUser() {
  const res = await fetch(`${BaseUrl}/api/logout-user`, {
    method: "POST",
    cache: "no-store",  
     headers: {
      "Content-Type": "application/json",
    },
    credentials: "include"
  });

  if (!res.ok) {
    throw new Error(`Failed Logout: ${res.statusText}`);
  }

  const user = await res.json();
  return user;
}
