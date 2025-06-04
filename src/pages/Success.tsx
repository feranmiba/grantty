import { CheckCircle, ArrowLeft, Receipt, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import usePaymentStore from "@/store/usePaymentstore";

interface PaymentInfo {
  reference: string;
  startup_id: string;
  amount: number;
}

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { payment } = usePaymentStore();

  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [failed, setFailed] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo>({
    reference: "",
    startup_id: "",
    amount: 0,
  });

  // Extract only the `reference` query param
  const query = new URLSearchParams(location.search);
  const reference = query.get("reference");
  const token = localStorage.getItem("authToken");
  const startup_id =  payment.startup_id || "2"; 

  useEffect(() => {
  const verifyPayment = async () => {
    if (!reference) {
      setFailed(true);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(
        ` https://grantty-backend-fltj.onrender.com/payments/verify/${reference}?startup_id=${startup_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) throw new Error("Verification failed");

      const data = await res.json();
      setPaymentInfo({
        reference: data.reference || reference,
        amount: (data.amount || 0) / 100,
        startup_id: "1",
      });

      setVerified(true);
    } catch (err) {
      console.error("Verification error:", err);
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  verifyPayment();
}, [reference]);

if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <ClipLoader size={50} color="#10B981" />
      </div>
    );
  }

  if (failed || !verified) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-4 text-center">
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4">Payment Failed</h2>
          <p className="text-gray-700 mb-6">
            We couldn't verify your payment. Please try again or contact support.
          </p>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Payment Successful!
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            Thank you for your purchase. Your payment has been processed successfully.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Transaction ID:</span>
              <span className="text-sm font-mono font-medium">#{paymentInfo.reference}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Date:</span>
              <span className="text-sm font-medium">{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Amount</span>
              <span className="text-sm font-medium text-green-600">
                ₦
                {new Intl.NumberFormat("en-NG", {
                  style: "decimal",
                }).format(paymentInfo.amount)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Status:</span>
              <span className="text-sm font-medium text-green-600">Completed</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <Button onClick={() => navigate("/grantor-dashboard")} className="w-full bg-green-600 hover:bg-green-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go to Dashboard
            </Button>

            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" onClick={() => window.print()}>
                <Receipt className="w-4 h-4 mr-2" />
                Receipt
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  const element = document.createElement("a");
                  element.setAttribute(
                    "href",
                    "data:text/plain;charset=utf-8,Transaction Receipt\nThank you for your purchase!"
                  );
                  element.setAttribute("download", "receipt.txt");
                  element.style.display = "none";
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                }}
              >
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>

          <div className="text-center pt-4 border-t">
            <p className="text-xs text-gray-500">
              Need help? Contact our support team at{" "}
              <a href="mailto:info@grantty.org" className="text-green-600 hover:underline">
                info@grantty.org
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentSuccess;
