# Mock API reference<sup>**1.0.0**</sup>

The Mock API allows you to work with payment transactions.

::: details Servers

https://api.mocksoftware.com/v1

:::

---

### [GET] /payments
**List all payments**

#### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | List of payments | **application/json**: [ [Payment](#payment) ]<br> |

### [POST] /payments
**Create a new payment**

#### Request Body

| Required | Schema |
| -------- | ------ |
|  Yes | **application/json**: [CreatePaymentRequest](#createpaymentrequest)<br> |

#### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 201 | Payment created successfully | **application/json**: [Payment](#payment)<br> |

### [GET] /payments/\{paymentId}
**Retrieve a specific payment using the payment ID**

#### Parameters

| Name | Located in | Description | Required | Schema |
| ---- | ---------- | ----------- | -------- | ------ |
| paymentId | path | The ID of the payment transaction | Yes | string |

#### Responses

| Code | Description | Schema |
| ---- | ----------- | ------ |
| 200 | Payment details | **application/json**: [Payment](#payment)<br> |
| 404 | Payment not found |  |

---
### Schemas

#### Payment

| Name | Type | Description | Required | Example |
| ---- | ---- | ----------- | -------- | -------
| paymentId | string | The ID of the payment transaction | No | a17841 |
| amount | number | The transaction value | No | 10 |
| currency | string | The currency of the transaction | No | GBP |
| status | string | *Enum:* `"pending"`, `"completed"`, `"failed"` | No | `"completed"` |

#### CreatePaymentRequest

| Name | Type | Description | Required | Example |
| ---- | ---- | ----------- | -------- | -------
| amount | number | The transaction value | Yes | 10 |
| currency | string | The currency of the transaction | Yes | GBP |
| recipientId | string | The ID of the recipient of the payment transaction | Yes | 170162d
