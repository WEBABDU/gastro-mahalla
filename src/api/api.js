import axios from "axios";

let accessToken = localStorage.token;
const instance = axios.create({
  baseURL: "https://api.gastromahalla.uz/v1/",
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const instance2 = axios.create({
  baseURL: "https://api.gastromahalla.uz/v1/",
});

export const RegionsApi = {
  async getRegions() {
    const data = await instance.get("country/regions");
    return data.data;
  },
};

export const OrganizationAPI = {
  async getOrganization() {
    const data = await instance.get("organization?include=image&_f=json&");
    return data.data;
  },

  async getOrganizationByID(userId) {
    const data = await instance.get(
      `organization/${userId}?include=image&_f=json`
    );
    return data.data;
  },
};

export const ProductsAPI = {
  async getProducts(userId) {
    const data = await instance2.get(
      `organization/${userId}/products?include=image&_f=json`
    );
    return data.data;
  },

  async getProductById(productId, userId) {
    const data = await instance2.get(
      `organization/${userId}/products/${productId}?include=images&_f=json`
    );
    return data.data;
  },
};

export const RegistrationAPI = {
  async me() {
    if (accessToken) {
      const data = await instance.get("user/get-me");
      return data.data;
    }
  },

  async setRegister(
    email,
    password,
    password_confirm,
    first_name,
    last_name,
    phone
  ) {
    const data = await instance.post("user/register", {
      email,
      password,
      password_confirm,
      first_name,
      last_name,
      phone,
    });
    return data.data;
  },

  async confirmEmail(email, code) {
    const data = await instance.post("user/confirm-email", {
      email,
      code,
    });
    return data.data;
  },

  async login(email, password) {
    const data = await instance.post("user/login", {
      login: email,
      password,
    });

    return data.data;
  },
};

export const BookingAPI = {
  async setDish(date, people = 1, portion = 1, product_id, table = "2") {
    const data = await instance.post("booking/dish", {
      date,
      people,
      portion,
      product_id,
      table,
    });

    return data.data;
  },

  async getBookings() {
    const data = await instance.get("booking?include=product,details");
    return data.data;
  },

  async cancelBooking(id) {
    const data = await instance.get(`booking/cancel/${id}`);
    return data.data;
  },
};

export const UpdateProfileAPI = {
  async updateProfile(email, first_name, last_name, phone) {
    const data = await instance.post("user/update", {
      email,
      first_name,
      last_name,
      phone,
    });
    return data.data;
  },

  async uploadImage(image) {
    const data = await axios({
      method: "post",
      url: "https://api.gastromahalla.uz/v1/user/upload-image",
      data: {
        image,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return data.data;
  },
};
