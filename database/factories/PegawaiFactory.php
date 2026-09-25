<?php

namespace Database\Factories;

use App\Models\Pegawai;
use Illuminate\Database\Eloquent\Factories\Factory;

class PegawaiFactory extends Factory
{
    protected $model = Pegawai::class;

    public function definition(): array
    {
        $gender = fake()->randomElement(['L', 'P']);

        return [
            'user_id' => \App\Models\User::factory(),
            'nip' => fake()->numerify('##############'),
            'nik' => fake()->numerify('#################'),
            'tempat_lahir' => fake()->city(),
            'tanggal_lahir' => fake()->date(),
            'jenis_kelamin' => $gender,
            'agama' => fake()->randomElement(['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu']),
            'alamat' => fake()->address(),
            'no_telepon' => fake()->phoneNumber(),
            'jabatan' => fake()->jobTitle(),
            'unit_kerja' => fake()->company(),
            'golongan' => fake()->numerify('IV/'),
            'pangkat' => fake()->randomElement(['Penata Muda Tk. I', 'Penata Muda', 'Penata Tk. I', 'Penata', 'Pembina Tk. I', 'Pembina']),
            'status' => fake()->randomElement(['aktif', 'aktif', 'aktif', 'nonaktif']),
            'foto' => null,
        ];
    }
}
