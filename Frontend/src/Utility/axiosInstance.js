import axios from "axios";
import { base_url } from "./apiPath";
import { v4 as uuidv4 } from "uuid";

export const axiosInstance = axios.create({
    baseURL: base_url,
    timeout: 80000,
    headers: {
        "Content-Type": "application/json",
    }
})

// Short-lived cache to store idempotency keys for duplicate requests (e.g., double-clicks)
const idempotencyKeyCache = new Map();

//Request Interceptors
axiosInstance.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        // Apply Idempotency key for state-changing methods
        const mutatingMethods = ["post", "put", "patch", "delete"];
        if (config.method && mutatingMethods.includes(config.method.toLowerCase())) {
            // Create a unique hash based on the request destination and payload
            const requestPayloadHash = `${config.method}:${config.url}:${JSON.stringify(config.data || {})}`;
            
            // If we haven't seen this exact request recently, generate a new UUID
            if (!idempotencyKeyCache.has(requestPayloadHash)) {
                idempotencyKeyCache.set(requestPayloadHash, uuidv4());
                
                // Clear the cache after 2 seconds so the user CAN legitimately submit the same form again later
                setTimeout(() => {
                    idempotencyKeyCache.delete(requestPayloadHash);
                }, 2000);
            }

            // Attach the cached key to the header
            config.headers["x-idempotency-key"] = idempotencyKeyCache.get(requestPayloadHash);
        }

        return config;
    }, (error) => {
        return Promise.reject(error)
    })

//Response Interceptors
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    }, (error) => {
        return Promise.reject(error);
    })
