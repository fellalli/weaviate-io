# How-to: Configure -> Backups - Python examples

# ================================
# ===== INSTANTIATION-COMMON =====
# ================================

# START CreateBackup  # START RestoreBackup  # START StatusCreateBackup  # START StatusRestoreBackup  # START CancelBackup
import weaviate

client = weaviate.connect_to_local()

# END CreateBackup  # END RestoreBackup  # END StatusCreateBackup  # END StatusRestoreBackup  # END CancelBackup

# Create the collections, whether they exist or not
client.collections.delete(["Article", "Publication"])
articles = client.collections.create(name="Article")
publications = client.collections.create(name="Publication")

articles.data.insert(properties={"title": "Dummy"})
publications.data.insert(properties={"title": "Dummy"})

# START CreateBackup
result = client.backup.create(
    backup_id="my-very-first-backup",
    backend="filesystem",
    include_collections=["Article", "Publication"],
    wait_for_completion=True,
)

print(result)
# END CreateBackup

# Test
assert result.status == "SUCCESS"

# ==============================================
# ===== Check status while creating backup =====
# ==============================================

# START StatusCreateBackup
result = client.backup.get_create_status(
    backup_id="my-very-first-backup",
    backend="filesystem",
)

print(result)
# END StatusCreateBackup

# Test
assert result.status == "SUCCESS"

# ==========================
# ===== Restore backup =====
# ==========================

client.collections.delete("Publication")

# START RestoreBackup
result = client.backup.restore(
    backup_id="my-very-first-backup",
    backend="filesystem",
    exclude_collections="Article",
    wait_for_completion=True,
)

print(result)
# END RestoreBackup

# Test
assert result.status == "SUCCESS"

# ==============================================
# ===== Check status while restoring backup =====
# ==============================================

# START StatusRestoreBackup
result = client.backup.get_restore_status(
    backup_id="my-very-first-backup",
    backend="filesystem",
)

print(result)
# END StatusRestoreBackup

# Test
assert result.status == "SUCCESS"

# Clean up
client.collections.delete(["Article", "Publication"])

# ==============================================
# ===== Cancel ongoing backup =====
# ==============================================

# Note - this will fail in automated tests as the backup is already completed

# Create the collections, whether they exist or not
client.collections.delete(["Article", "Publication"])
articles = client.collections.create(name="Article")
publications = client.collections.create(name="Publication")

articles.data.insert(properties={"title": "Dummy"})
publications.data.insert(properties={"title": "Dummy"})

# Start a backup to cancel
result = client.backup.create(
    backup_id="some-unwanted-backup",
    backend="filesystem",
    include_collections=["Article", "Publication"],
    wait_for_completion=False,
)

print(result)

# START CancelBackup
result = client.backup.cancel(
    backup_id="some-unwanted-backup",
    backend="filesystem",
)

print(result)
# END CancelBackup

client.close()
