import { create } from 'zustand';

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

const usePaymentStore = create<PaymentState>((set) => ({
  payment: null,
  setPayment: (data) => set({ payment: data }),
  clearPayment: () => set({ payment: null }),
}));

export default usePaymentStore;

