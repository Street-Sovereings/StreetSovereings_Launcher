package main

import (
	"context"
	"os/exec"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}
func (a *App) RunExecutable(path string) error {
	cmd := exec.Command(path)
	return cmd.Start()
}

func (a *App) OpenNotepad(path string) error {
	cmd := exec.Command("notepad" + path)
	return cmd.Start()
}
