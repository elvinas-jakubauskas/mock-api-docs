---
description: A task topic describing how to use the API to get payment information using the payment ID
---

# Getting payment information using the payment ID

::: tip PREREQUISITES

- Install Postman onto your local machine.
- Create an API key configured with the **Payments** permission.

For more information, see [First steps](first-steps.md).

:::

You can use the Mock API to search for and get payment information for a specific payment transaction. To get payment information for a specific payment transaction, you need to include the payment ID in your request.

**To get payment information using the payment ID:**

1. On your local machine, open Postman.
2. In the **History** section, select **New**.
3. In the popup, select **HTTP**.   
A new HTTP request menu is displayed.
4. In the HTTP request menu, select **Authorization**.
5. From the **Type** drop-down, select **API Key**.
6. In **Key**, enter the name of your Mock API key.
7. In **Value**, enter your Mock API key value.
8. From the **Add to** drop-down, select **Header**.
9. From the method drop-down, select **GET**.
10. In the **Enter URL or paste text** field, enter the following:   
```curl
https://api.mocksoftware.com/v1/payments/{paymentId}
```
11. Replace `{paymentId}` with the payment ID of the payment transaction you want to retrieve.
12. Select **Send**.   
Your request is sent and the payment transaction information is displayed.

<!--Note that in real documentation, I would include some information here about errors and link to a troubleshooting section-->