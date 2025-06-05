import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  // <-- import useNavigate
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { Mail, ArrowLeft, Loader2 } from 'lucide-react';

const API_BASE_URL = "https://grantty-backend-21eu.onrender.com"; // ⛳ Replace this with your backend

const VerifyEmail = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);
  const [email, setEmail] = useState('amiolademilade@gmail.com');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();  // <-- initialize navigate hook

  useEffect(() => {
    inputRefs.current[0]?.focus();
    const storedEmail = localStorage.getItem('user');
    if (storedEmail) setEmail(storedEmail);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendTimer > 0) {
      interval = setInterval(() => {
        setResendTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendTimer]);

  const handleVerifyCode = async (otp: string) => {
    setIsVerifying(true);
    try {
      const res = await fetch(`${API_BASE_URL}/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ otp, email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'OTP verification failed');
      }

      toast({ title: 'Success', description: 'OTP verified!', variant: 'default' });

      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      // Navigate to signin page after successful verification
      navigate('/auth/signin');

    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setIsVerifying(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    try {
      const res = await fetch(`${API_BASE_URL}/resend-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Resend failed');
      }

      toast({ title: 'Success', description: 'OTP resent successfully', variant: 'default' });
      setResendTimer(30); // 30 seconds cooldown
    } catch (error: any) {
      toast({ title: 'Error', description: error.message, variant: 'destructive' });
    } finally {
      setIsResending(false);
    }
  };

  const handleInputChange = (index: number, value: string) => {
    if (value.length > 1 || !/^\d*$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (value && index === 5 && newCode.every(d => d !== '')) {
      handleVerifyCode(newCode.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (pastedData.length === 6) {
      const newCode = pastedData.split('');
      setCode(newCode);
      handleVerifyCode(pastedData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <button className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to login
          </button>
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h1>
          <p className="text-gray-600">
            We sent a verification code to <span className="font-medium text-gray-900">{email}</span>
          </p>
        </div>

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-xl">Enter verification code</CardTitle>
            <CardDescription>Enter the 6-digit code we sent to your email</CardDescription>
          </CardHeader>

          <CardContent>
            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              handleVerifyCode(code.join(''));
            }}>
              <div className="flex justify-center gap-3">
                {code.map((digit, index) => (
                  <Input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className="w-12 h-12 text-center text-lg font-semibold border-2 rounded-lg focus:border-blue-500 focus:ring-blue-200 transition-all duration-200"
                    disabled={isVerifying}
                  />
                ))}
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                disabled={isVerifying || code.some(digit => digit === '')}
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  'Verify Email'
                )}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-3">Didn't receive the code?</p>
              <Button
                variant="ghost"
                onClick={handleResendCode}
                disabled={isResending || resendTimer > 0}
                className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 font-medium transition-colors"
              >
                {isResending ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : resendTimer > 0 ? (
                  `Resend in ${resendTimer}s`
                ) : (
                  'Resend code'
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            Need help?{' '}
            <button className="text-blue-600 hover:underline">Contact support</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
