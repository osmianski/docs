<?php

it('returns_a_successful_response', function () {
    $response = $this->get(route('home'));

    $response->assertSuccessful();
});

todo('what’s on the home page?');
todo('what’s on a user home page?');
todo('what’s on an organization home page?');
todo('seed the first user');
