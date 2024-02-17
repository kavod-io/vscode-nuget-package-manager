/**
 * This is a definition for a Nuget source.  These are defined in the extension settings.
 */
export interface PackageSource {
  name: string

  /**
   * Service Index URL e.g. https://api.nuget.org/v3/index.json
   */
  url: string

  credentials: Credentials | null
}

export interface Credentials {
  username: string
  password: string
}

export type Message = SetProjectsMessage | SetSourcesMessage

export interface SetProjectsMessage {
  command: "setProjects"
  payload: Project[]
}

export interface SetSourcesMessage {
  command: "setSources"
  payload: PackageSource[]
}

// Need a class that can:
// * parse projects from source (e.g. file system)
// * add/remove nuget packages given a package id/version, package source, and list of project targets

export interface Project {
  path: string // consider a vscode.Uri instead.
  projectName: string
  packages: ProjectPackage[]
}

export interface ProjectPackage {
  id: string
  version: string
}

export type Command =
  | ReloadProjectCommand
  | ReloadSourcesCommand
  | AddPackagesCommand
  | RemovePackagesCommand

export interface ReloadProjectCommand {
  command: "reloadProjects"
}

export interface ReloadSourcesCommand {
  command: "reloadSources"
}

export interface AddPackagesCommand {
  command: "add"
  source: string
  projects: Project[]
  packageId: string
  version: string
}

export interface RemovePackagesCommand {
  command: "remove"
  projects: Project[]
  packageId: string
}
