import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ClassesModule } from './classes/classes.module';
import { BookingsModule } from './bookings/bookings.module';
import { EquipmentModule } from './equipment/equipment.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [AuthModule, UsersModule, AttendanceModule, ClassesModule, BookingsModule, EquipmentModule, ProfileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
