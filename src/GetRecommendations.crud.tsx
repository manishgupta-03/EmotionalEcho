import axios from "axios";

export const getRecommendation = (
    recommendationId: string,
    payload: any
  ) => {
    return axios.put(
    //   `${API_URL}${BASE_URL}/${eventId}/recommendations/${recommendationId}`,
      payload
    );
  };