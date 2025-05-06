import dotenv from 'dotenv';

dotenv.config();

export const getServerPort= () => process.env.PORT || "3000";