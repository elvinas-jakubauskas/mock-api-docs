# Mock API reference<sup>**1.0.0**</sup>
A mock API that allows users to work with payment transactions

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
| paymentId | path |  | Yes | string |

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
| id | string |  | No | a17841 |
| amount | number |  | No | 10 |
| currency | string |  | No | GBP |
| status | string, <br>**Available values:** "pending", "completed", "failed" | *Enum:* `"pending"`, `"completed"`, `"failed"` | No | `"completed"` |

#### CreatePaymentRequest

| Name | Type | Description | Required | Example |
| ---- | ---- | ----------- | -------- | -------
| amount | number |  | Yes | 10 |
| currency | string |  | Yes | GBP |
| recipientId | string |  | Yes | 170162d
