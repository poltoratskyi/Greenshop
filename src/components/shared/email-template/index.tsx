import { Template } from "../../../types";

const EmailTemplate: React.FC<Template> = ({
  firstName,
  lastName,
  orderId,
  items,
  total,
  subTotalAmount,
}) => (
  <div
    style={{
      maxWidth: "600px",
      background: "#fafafa",
      padding: "20px",
      margin: "auto",
      fontFamily: "IBM_Plex_Sans, sans-serif",
      border: "1px solid #eaeaea",
    }}
  >
    <h2
      style={{
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "24px",
        color: "#3d3d3d",
        textAlign: "center",
      }}
    >
      Thanks for Your Order,{" "}
      <span
        style={{
          textTransform: "capitalize",
        }}
      >
        {firstName} {lastName}
      </span>
      !
    </h2>
    <p
      style={{
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "24px",
        color: "#3d3d3d",
        textAlign: "center",
      }}
    >
      Your order number: <strong>{orderId}</strong>
    </p>

    <h3
      style={{
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "24px",
        color: "#3d3d3d",
        marginTop: "20px",
      }}
    >
      Order Details:
    </h3>
    <table
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
    >
      <thead>
        <tr>
          <th
            style={{
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "24px",
              color: "#3d3d3d",
              padding: "10px",
              textAlign: "left",
              borderBottom: "1px solid #eaeaea",
            }}
          >
            Product
          </th>
          <th
            style={{
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "24px",
              color: "#3d3d3d",
              padding: "10px",
              textAlign: "center",
              borderBottom: "1px solid #eaeaea",
            }}
          >
            Quantity
          </th>
          <th
            style={{
              fontWeight: "400",
              fontSize: "14px",
              lineHeight: "24px",
              color: "#3d3d3d",
              padding: "10px",
              textAlign: "right",
              borderBottom: "1px solid #eaeaea",
            }}
          >
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td
              style={{
                padding: "10px",
                textAlign: "left",
                borderBottom: "1px solid #eaeaea",
              }}
            >
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#3d3d3d",
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#727272",
                }}
              >
                <span
                  style={{
                    color: "#3d3d3d",
                  }}
                >
                  Sku:
                </span>{" "}
                {item.sku}
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#727272",
                }}
              >
                <span
                  style={{
                    color: "#3d3d3d",
                  }}
                >
                  Size:
                </span>{" "}
                {item.variations[item.variationId].size.shortName}
              </p>
            </td>
            <td
              style={{
                fontWeight: "600",
                fontSize: "14px",
                lineHeight: "24px",
                color: "#3d3d3d",
                padding: "10px",
                textAlign: "center",
                borderBottom: "1px solid #eaeaea",
              }}
            >
              {item.quantity}
            </td>
            <td
              style={{
                padding: "10px",
                textAlign: "right",
                borderBottom: "1px solid #eaeaea",
              }}
            >
              {item.variations[item.variationId].onSale ? (
                <>
                  <span
                    style={{
                      fontWeight: "400",
                      fontSize: "14px",
                      lineHeight: "24px",
                      display: "inline-block",
                      marginRight: "20px",
                      textDecoration: "#cbcbcb line-through",
                      color: "#a5a5a5",
                    }}
                  >
                    ${item.variations[item.variationId].price.toFixed(2)}
                  </span>
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#46a358",
                    }}
                  >
                    ${item.variations[item.variationId].sale.toFixed(2)}
                  </span>
                </>
              ) : (
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: "#46a358",
                  }}
                >
                  ${item.variations[item.variationId].price.toFixed(2)}
                </span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    <div
      style={{
        textAlign: "right",
        fontSize: "14px",
        fontWeight: "400",
        marginTop: "20px",
      }}
    >
      Subtotal:{" "}
      <span style={{ fontWeight: "600", color: "#46a358" }}>
        ${subTotalAmount.toFixed(2)}
      </span>
    </div>

    <div
      style={{
        textAlign: "right",
        fontSize: "14px",
        fontWeight: "400",
        marginTop: "20px",
      }}
    >
      Coupon Discount:{" "}
      <span style={{ fontWeight: "600", color: "#46a358" }}>$00.00</span>
    </div>

    <div
      style={{
        textAlign: "right",
        fontSize: "14px",
        fontWeight: "400",
        marginTop: "20px",
      }}
    >
      Shipping:{" "}
      <span style={{ fontWeight: "600", color: "#46a358" }}>$16.00</span>
    </div>

    <div
      style={{
        textAlign: "right",
        fontSize: "18px",
        fontWeight: "600",
        marginTop: "20px",
      }}
    >
      Total: <span style={{ color: "#46a358" }}>${total.toFixed(2)}</span>
    </div>
  </div>
);

export default EmailTemplate;
