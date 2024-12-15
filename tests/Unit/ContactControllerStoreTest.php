<?php

namespace Tests\Unit;

use App\Mail\ContactMail;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;


class ContactControllerStoreTest extends TestCase
{
    use RefreshDatabase;

    /**
     * Test submission with empty fields
     */
    public function testSubmissionWithEmptyFields()
    {
        $response = $this->postJson('/api/contact', []);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'email', 'phone', 'message']);
    }

    /**
     * Test submission with invalid fields
     */
    public function testSubmissionWithInvalidFields()
    {
        $response = $this->postJson('/api/contact', [
            'name' => str_repeat('a', 51), // Exceeds max length
            'email' => 'invalid-email',
            'phone' => '12345',
            'message' => str_repeat('a', 600), // Exceeds max length
        ]);
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['name', 'email', 'phone', 'message']);
    }

    /**
     * Test successful submission
     */
    public function testSuccessfulSubmission()
    {
        Mail::fake(); // Fake mail sending

        $payload = [
            'name' => 'Test test',
            'email' => 'testtest@example.com',
            'phone' => '+359878726955',
            'message' => 'This is a test message',
        ];

        $response = $this->postJson('/api/contact', $payload);

        $response->assertStatus(200)
            ->assertJsonStructure(['contactID']);

        $contactID = $response->json('contactID');

        $this->assertDatabaseHas('contacts', [
            'id' => $contactID,
            'name' => 'Test test',
            'email' => 'testtest@example.com',
            'phone' => '+359878726955',
            'message' => 'This is a test message',
        ]);

        Mail::assertQueued(ContactMail::class, function ($mail) use ($payload) {
            return $mail->hasTo(env('MAIL_TO_ADDRESS', 'mailtrap@gmail.com'));
        });
    }
}

