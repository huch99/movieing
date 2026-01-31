import axios from "axios";

/**
 * 골통 API 인스턴스
 * */
const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8080",
    timeout: 5000,  // 5초 이내로 응답을 못 받으면 실패 처리
    headers: {      // Request Body가 JSON 형식임을 명시
        "Content-type" : "application/json",
    },
});

/**
 * 요청 인터셉터
 * - JWT 토큰 자동 첨부
 * */
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

/**
 * 응탑 인터셉터
 * - 공통 에러 처리
 */
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // 토큰 만료 / 인증 실패 처리
            console.error("인증 만료");
            // 예: 로그인 페이지로 이동
        }
        return Promise.reject(error);
    }
);

export default api;

