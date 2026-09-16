# Custom Event Validation Samples

Custom Event Registration Validation samples and evidence, covering custom event name collision scenarios across Blazor hosting models.

## Prerequisites

Ensure the following software is installed before running the samples:

- .NET SDK: **11.0.100-rc.1.26425.128**
- Visual Studio 2026 Insiders: **[12023.133] Professional**

---

## Running the Samples in Debug Mode

The repository contains the following sample applications:

- `InteractiveServer`
- `InteractiveWebAssembly`
- `StandaloneWebAssembly`

### Steps

1. Open the desired sample project in **Visual Studio 2026 Insiders**.
2. Click the **Run** button (or press **F5**).
3. The application launches in the browser.

**Note:** After opening the `InteractiveWebAssembly` project in Visual Studio 2026 Insiders, ensure that the Server project is set as the startup project.

### Expected Result

1. Open the browser's **Developer Tools** and navigate to the **Console** tab.
2. An error message should be displayed indicating that the custom event name collides with its browser event name, similar to:
```
The custom event 'scrolltop' cannot have the same name as its browserEventName 'scrolltop'. Choose a different name for the custom event.
```
