@forelse($conversation as $message)
@include('user.chat.singlemessage')
@empty No messages
@endforelse
