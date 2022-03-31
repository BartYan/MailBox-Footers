// import React, { useState } from 'react';

// import './Form.scss';
// import FormSignup from '../../Pages/ColumbusPage';
// import FormSuccess from './FormSuccess';
// import Columbus from '../Footers/Columbus';


// const Page = () => {
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   function submitForm() {
//     setIsSubmitted(true);
//   }

//   return (
//     <>
//       <div className='form-container'>

//         <div className='form-content-left'>
//           {/* if form is ready how footer table with your data or show normal left content*/}
//           {!isSubmitted ? (
//             <FormSuccess />
//           ) : (
//             <FormSuccess />
//           )}
//         </div>

//         <FormSignup submitForm={submitForm} />

//       </div>
//     </>
//   );
// };

// export default Page;