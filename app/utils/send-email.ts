import { FormData } from "@/app/components/contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = process.env.NEXT_PUBLIC_EMAIL_URL || "";
  console.log('apiEndpoint', apiEndpoint);

  fetch(apiEndpoint + "/mail", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
