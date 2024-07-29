Table "Person" {
  "UserID" INT [pk, increment]
  "FirstName" NVARCHAR(100)
  "LastName" NVARCHAR(100)
  "Email" NVARCHAR(100) [unique, not null]
  "Password" NVARCHAR(255) [not null]
  "AddressID" int [ref: > Addresse.AddressID]
  "PhoneNumber" NVARCHAR(20)
  "Role" NVARCHAR(50)
}

Table "Products" {
  "ProductID" INT [pk, increment]
  "Name" NVARCHAR(100)
  "Description" NVARCHAR(MAX)
  "Price" DECIMAL(10,2)
  "CategoryID" INT
  "StockQuantity" INT
  "ImageURL" NVARCHAR(255)
  "Brand" NVARCHAR(100)
}
Table "Addresse" {
  "AddressID" int [pk]
  "UserID" int [ref: > Person.UserID]
  "StreetAddress" varchar(100)
  "City" varchar(50)
  "Region" varchar(50)
  "Country" varchar(50)
  "IsDefault" bit
}

Table "Categories" {
  "CategoryID" INT [pk, increment]
  "Name" NVARCHAR(100)
  "Description" NVARCHAR(255)
}

Table "Orders" {
  "OrderID" INT [pk, increment]
  "UserID" INT
  "OrderDate" DATETIME
  "TotalAmount" DECIMAL(10,2)
  "Status" NVARCHAR(50)
  "ShippingAddress" NVARCHAR(255)
}

Table "OrderItems" {
  "OrderItemID" INT [pk, increment]
  "OrderID" INT
  "ProductID" INT
  "Quantity" INT
  "Price" DECIMAL(10,2)
}

Table "ShoppingCart" {
  "CartID" INT [pk, increment]
  "UserID" INT
}

Table "CartItems" {
  "CartItemID" INT [pk, increment]
  "CartID" INT
  "ProductID" INT
  "Quantity" INT
}

Table "Payments" {
  "PaymentID" INT [pk, increment]
  "OrderID" INT
  "PaymentDate" DATETIME
  "Amount" DECIMAL(10,2)
  "PaymentMethod" NVARCHAR(50)
  "PaymentStatus" NVARCHAR(50)
}

Table "Shipments" {
  "ShipmentID" INT [pk, increment]
  "OrderID" INT
  "ShipmentDate" DATETIME
  "TrackingNumber" NVARCHAR(100)
  "EstimatedDeliveryDate" DATETIME
}

Ref:"Categories"."CategoryID" < "Products"."CategoryID"

Ref:"Person"."UserID" < "Orders"."UserID"

Ref:"Orders"."OrderID" < "OrderItems"."OrderID"

Ref:"Products"."ProductID" < "OrderItems"."ProductID"

Ref:"Person"."UserID" < "ShoppingCart"."UserID"

Ref:"ShoppingCart"."CartID" < "CartItems"."CartID"

Ref:"Products"."ProductID" < "CartItems"."ProductID"

Ref:"Orders"."OrderID" < "Payments"."OrderID"

Ref:"Orders"."OrderID" < "Shipments"."OrderID"