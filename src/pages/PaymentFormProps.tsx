import React, { useState } from 'react';
import yapeGIF from '../assets/yape.gif';
import plinGIF from '../assets/plin.gif';
import pagoContraentregaGIF from '../assets/pago-contraentrega.gif';
import visaMastercardGIF from '../assets/visa-mastercard.gif';
import yapeQR from '../assets/yapeqr.png';
import plinQR from '../assets/plinqr.png';

interface PaymentFormProps {
  totalAmount: number;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ totalAmount }) => {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    cardName: '',
    expirationDate: '',
    cvv: '',
    phoneNumber: '',
    address: '', // Dirección para Pago Contraentrega
    name: '', // Nombre del usuario para Pago Contraentrega
    paymentAmount: '' // Monto con el que va a pagar
  });

  // Función para obtener la ubicación
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;

        // Aquí podrías usar una API externa como Google Maps para convertir las coordenadas en una dirección legible.
        const location = `Lat: ${lat}, Lon: ${long}`;
        setPaymentDetails((prevState) => ({
          ...prevState,
          address: location
        }));
      }, (error) => {
        console.error('Error al obtener la ubicación: ', error);
        alert('No pudimos acceder a tu ubicación. Por favor ingresa tu dirección manualmente.');
      });
    } else {
      alert('La geolocalización no es soportada por este navegador.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handlePaymentMethodChange = (method: string) => {
    setPaymentMethod(method);

    if (method === 'pago-contraentrega') {
      getLocation(); // Solicita la ubicación automáticamente
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (paymentMethod === 'pago-contraentrega') {
      if (!paymentDetails.address || !paymentDetails.name || !paymentDetails.paymentAmount) {
        alert('Por favor, completa todos los datos necesarios para Pago Contraentrega.');
        return;
      }

      if (parseFloat(paymentDetails.paymentAmount) <= 0) {
        alert('El monto de pago debe ser mayor a 0.');
        return;
      }
    }
    console.log('Método de pago:', paymentMethod);
    console.log('Detalles de pago:', paymentDetails);
    alert('Pago procesado con éxito');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-xl rounded-lg transform transition duration-500 hover:scale-105">
      <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Realizar Pago</h2>
      <p className="text-gray-700 text-lg mb-6 text-center">
        Total a pagar: <span className="font-semibold text-indigo-600">S/. {totalAmount}</span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Selecciona tu método de pago:</h3>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Tarjeta de Crédito/Débito */}
          <div
            onClick={() => handlePaymentMethodChange('visa-mastercard')}
            className={`cursor-pointer p-4 border rounded-lg text-center transition transform hover:scale-105 duration-300
              ${paymentMethod === 'visa-mastercard' ? 'border-indigo-600 bg-indigo-100 shadow-lg' : 'border-gray-300'}
            `}
          >
            <img src={visaMastercardGIF} alt="Visa/Mastercard" className="mx-auto w-16 h-16 mb-2" />
            <span className="font-medium text-lg">Tarjeta de Crédito/Débito</span>
          </div>

          {/* Yape */}
          <div
            onClick={() => handlePaymentMethodChange('yape')}
            className={`cursor-pointer p-4 border rounded-lg text-center transition transform hover:scale-105 duration-300
              ${paymentMethod === 'yape' ? 'border-indigo-600 bg-indigo-100 shadow-lg' : 'border-gray-300'}
            `}
          >
            <img src={yapeGIF} alt="Yape" className="mx-auto w-16 h-16 mb-2" />
            <span className="font-medium text-lg">Yape</span>
          </div>

          {/* Plin */}
          <div
            onClick={() => handlePaymentMethodChange('plin')}
            className={`cursor-pointer p-4 border rounded-lg text-center transition transform hover:scale-105 duration-300
              ${paymentMethod === 'plin' ? 'border-indigo-600 bg-indigo-100 shadow-lg' : 'border-gray-300'}
            `}
          >
            <img src={plinGIF} alt="Plin" className="mx-auto w-16 h-16 mb-2" />
            <span className="font-medium text-lg">Plin</span>
          </div>

          {/* Pago Contraentrega */}
          <div
            onClick={() => handlePaymentMethodChange('pago-contraentrega')}
            className={`cursor-pointer p-4 border rounded-lg text-center transition transform hover:scale-105 duration-300
              ${paymentMethod === 'pago-contraentrega' ? 'border-indigo-600 bg-indigo-100 shadow-lg' : 'border-gray-300'}
            `}
          >
            <img src={pagoContraentregaGIF} alt="Pago Contraentrega" className="mx-auto w-16 h-16 mb-2" />
            <span className="font-medium text-lg">Pago Contraentrega</span>
          </div>
        </div>

        {/* Formulario dinámico según el método de pago */}
        {paymentMethod === 'visa-mastercard' && (
          <div className="card-details space-y-4 mt-6">
            <h4 className="text-lg font-medium mb-4 text-gray-700">Detalles de la tarjeta:</h4>
            <input
              type="text"
              name="cardNumber"
              placeholder="Número de tarjeta"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 transition duration-200"
              required
            />
            <input
              type="text"
              name="cardName"
              placeholder="Nombre en la tarjeta"
              value={paymentDetails.cardName}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 transition duration-200"
              required
            />
            <div className="flex gap-4">
              <input
                type="text"
                name="expirationDate"
                placeholder="MM/AA"
                value={paymentDetails.expirationDate}
                onChange={handleInputChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 transition duration-200"
                required
              />
              <input
                type="text"
                name="cvv"
                placeholder="CVV"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 transition duration-200"
                required
              />
            </div>
          </div>
        )}

        {(paymentMethod === 'yape' || paymentMethod === 'plin') && (
          <div className="qr-details text-center mt-6">
            <h4 className="text-lg font-medium mb-4 text-gray-700">
              Escanea el código QR con {paymentMethod === 'yape' ? 'Yape' : 'Plin'}:
            </h4>
            <img
              src={paymentMethod === 'yape' ? yapeQR : plinQR}
              alt="QR Code"
              className="mx-auto w-48 h-48 transition transform hover:scale-110"
            />
          </div>
        )}

        {/* Pago Contraentrega: Solicitar Dirección, Nombre, Monto a pagar */}
        {paymentMethod === 'pago-contraentrega' && (
          <div className="mt-6 space-y-4">
            <h4 className="text-lg font-medium mb-4 text-gray-700">Datos para Pago Contraentrega</h4>
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre completo"
              value={paymentDetails.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 transition duration-200"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Ingresa tu dirección de entrega"
              value={paymentDetails.address}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 transition duration-200"
              required
            />
            <input
              type="number"
              name="paymentAmount"
              placeholder="Monto con el que vas a pagar (S/.)"
              value={paymentDetails.paymentAmount}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 transition duration-200"
              required
              min="1"
            />
            <p className="text-gray-600 mt-2">
              Asegúrate de que la dirección y el monto ingresado sean correctos. El pago se realizará al recibir el producto en esta ubicación.
            </p>
          </div>
        )}

        <button
          type="submit"
          className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 transition duration-300"
        >
          Pagar
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
