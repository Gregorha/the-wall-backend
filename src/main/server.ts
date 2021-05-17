// import 'module-alias/register';
import app from '@/main/config/app';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/../../.env' });

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running at: http://localhost:${process.env.PORT || 5000}`)
);
