#!/bin/bash

readonly PROJECT_ROOT=$( cd "$( dirname "$0" )" && pwd )

readonly RELOAD_COMMAND="${PROJECT_ROOT}/reload-browser Firefox"

readonly print_line='echo "=================================================="'

entr_commands=''

main() {
  generate_entr_commands

  while true; do
    find "${PROJECT_ROOT}/build" | entr -d bash -c "$entr_commands"
  done
}

generate_entr_commands() {
  local command_parts=(
    'tput reset'
    'echo "Reloading browser..."'
    "$print_line"
    "$RELOAD_COMMAND"
    'echo'
    "$print_line"
    'echo'
    'date'
  )

  entr_commands="$(array_join ';' "${command_parts[@]}")"
}

function array_join() {
  local d=$1
  shift
  echo -n "$1"
  shift
  printf "%s" "${@/#/$d}"
}

main
