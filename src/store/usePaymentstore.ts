import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface PaymentData {
  startup_name: string;
  email: string;
  amount: number | "";  
  reference: string;
  startup_id: string;
  payment_id: string;
}

interface PaymentState {
  payment: PaymentData | null;
  setPayment: (data: PaymentData) => void;
  clearPayment: () => void;
}

const usePaymentStore = create<PaymentState>()(
  persist(
    (set) => ({
      payment: null,
      setPayment: (data) => set({ payment: data }),
      clearPayment: () => set({ payment: null }),
    }),
    {
      name: 'payment-storage',
      storage: createJSONStorage(() => localStorage), // ✅ safest approach
    }
  )
);

export default usePaymentStore;
