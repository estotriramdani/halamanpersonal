import validator from 'validator';
import axios from 'axios';

const getAllUsers = async (username = 'null') => {
  try {
    const response = await axios.get(`http://localhost:8000/api/${username}`);
    const responseJson = await response.data;
    return responseJson;
  } catch (error) {
    return error;
  }
};

export function validateName(value) {
  let error;
  if (!value) {
    error = 'Full name is required';
  }
  return error;
}

export function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}

export async function validateUsername(value) {
  let error;
  if (!value) {
    error = 'Username Required';
  }
  if (value === 'admin') {
    error = '"admin" is not available';
  }
  if (
    !validator.isLength(value, {
      min: 6,
    })
  ) {
    error = 'Username should be at least 6 characters ';
  }
  // if (value) {
  //   const allUsers = await getAllUsers(value);
  //   if (allUsers.data !== null) {
  //     error = `${value} is already registered`;
  //   }
  // }
  return error;
}

export function validatePassword(value) {
  let error;
  if (!value) {
    error = 'Password is required';
  }
  if (
    !validator.isStrongPassword(value, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 0,
      returnScore: false,
      pointsPerUnique: 1,
      pointsPerRepeat: 0.5,
      pointsForContainingLower: 0,
      pointsForContainingUpper: 0,
      pointsForContainingNumber: 0,
      pointsForContainingSymbol: 0,
    })
  ) {
    console.log();
    error =
      'Password should contains at least 8 characters with 1 lowercase, 1 uppercase, and 1 number';
  }
  return error;
}
