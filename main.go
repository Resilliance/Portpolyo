package main

import (
	"html/template"
	"net/http"
)

type Project struct {
	Title       string
	Date        string
	Tags        []string
	Description string
}

type PageData struct {
	Title   string
	Projects []Project
}

func main() {
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	http.HandleFunc("/", landingPage)
	http.HandleFunc("/projects", projectsPage)
	http.HandleFunc("/resume", resumePage)
	http.ListenAndServe(":8080", nil)
}

func landingPage(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("templates/landing.html"))
	data := PageData{
		Title: "Welcome to My Portfolio",
	}
	tmpl.Execute(w, data)
}

func projectsPage(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("templates/projects.html"))
	data := PageData{
		Title: "My Projects",
		Projects: []Project{
			{Title: "Project One", Date: "2025-01-01", Tags: []string{"Go", "Web"}, Description: "A Go web app."},
			{Title: "Project Two", Date: "2025-01-02", Tags: []string{"Python", "Data"}, Description: "A data processing app."},
		},
	}
	tmpl.Execute(w, data)
}

func resumePage(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("templates/resume.html"))
	data := PageData{
		Title: "My Resume",
	}
	tmpl.Execute(w, data)
}

// Static files structure:
// /static/css/style.css
// /static/js/script.js

// Templates structure:
// /templates/landing.html
// /templates/projects.html
// /templates/resume.html
