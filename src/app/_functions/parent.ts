import axios from 'axios';

export const getParentQuestions = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await axios.get(`${API_URL}/parents`);

    return {
        success: true,
        data: response.data
    }

    // if (response.status !== 200) {
    //   return {
    //     success: false,
    //     message: 'Login failed',
    //   };
    // }
  } catch (error) {
    return {
      success: false,
      message: 'Something went wrong',
    };
  }
};


export const postParentResponse = async (data: any) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    try {
        const response = await axios.post(`${API_URL}/alumni`, data);
        // if (response.status !== 200) {
        // return {
        //     success: false,
        //     message: 'Response failed',
        // };
        // }
        return {
        success: true,
        message: 'Response successful',
        };
    } catch (error) {
        return {
        success: false,
        message: 'Something went wrong',
        };
    }
}