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

    help - display this help text
    list-devices - list discoverable devices
    list-zones - list discoverable zones
    volume [new-volume] - show or set the volume
    current-track - displays current track information
    play - start playback
    stop - stop playback
    pause - pause playback
    next - skip to the next track

```

## Related

Sonos Library - https://github.com/bencevans/node-sonos

## Licence

MIT © [Ben Evans](http://bensbit.co.uk)
