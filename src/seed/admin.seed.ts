
// create an admin user if not exists
import bcrypt from 'bcrypt';
import User from '../models/user.model';

const createAdminUser = async () => {
  try {
    const existingAdmin = await User.findOne({ email:'admin@gmail.com' });
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);
    const adminUser = new User({
      name: 'Admin',
      email: 'admin@gmail.com',
      password: hashedPassword,
      role: 'admin',
    });
    await adminUser.save();
    console.log('Admin user created successfully');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } 
};

export default createAdminUser;
