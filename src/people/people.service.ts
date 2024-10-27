import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import axios from 'axios';

@Injectable()
export class PeopleService {

  constructor(private readonly httpService: HttpService) {}

  async getGender(name: string) {
    // console.log({name})
    const res = await this.httpService.axiosRef.get(`https://api.genderize.io/?name=${name}`);
    // const res = await axios.get(`https://api.genderize.io/?name=${name}`);
    return res.data
  }
}
