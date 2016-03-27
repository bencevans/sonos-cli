# sonos-cli

> CLI for controlling [Sonos](http://www.sonos.com/) zones

## Install

    $ npm install --global sonos-cli

## Usage

```
Usage: sonos-cli [OPTION...] [COMMAND] [ARGS]

  Options:
    -V --version - displays package.json version
    -T --timeout [time] - sets timeout time for sonos discovery
    -Z --zone [zoneid] - sets the zone to take action on

  Commands:

    # General
    help - display this help text

    # Zone Management
    list-devices - list discoverable devices
    list-zones - list discoverable zones

    # Playback Management
    volume [new-volume] - show or set the volume
    current-track - displays current track information
    play [uri] - start playback or play a given track
    stop - stop playback
    pause - pause playback
    next - skip to the next track

```

## Examples

Find a zone

    $ sonos list-zones
    RINCON_000E585B7C9801400:1
      Living Room

Play Bananna Pancakes - Jack Johnson from Spotify

    # Right click on a track on Spotify to copy the Spotify URI
    $ sonos --zone=RINCON_000E585B7C9801400:1 play spotify:track:0BgbobvykXxEvxo2HhCuvM

Play an MP3 from the web

    $ sonos --zone=RINCON_000E585B7C9801400:1 play

## Related

Sonos Library - https://github.com/bencevans/node-sonos

## Licence

MIT © [Ben Evans](http://bensbit.co.uk)
